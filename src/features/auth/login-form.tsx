"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginInput } from "./schema";
import { LoginIcon } from "./login-icon";

export function LoginForm() {
  const [visible, setVisible] = useState(false);
  const [help, setHelp] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginInput>({ resolver: zodResolver(loginSchema), defaultValues: { email: "", password: "", rememberMe: false } });
  async function submit(values: LoginInput) {
    setError(null);
    try {
      const result = await authClient.signIn.email(values);
      if (result.error) {
        setError(result.error.status === 429 ? "Too many attempts. Wait a minute and try again." : result.error.status >= 500 ? "Sign-in is temporarily unavailable. Please try again later." : "Email or password is incorrect. Please try again.");
        return;
      }
      // Reload the document so no anonymous prefetched workspace is reused.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign("/dashboard");
    } catch { setError("Unable to connect. Check your connection and try again."); }
  }
  return <>
    <form className="login-form" onSubmit={handleSubmit(submit)} noValidate>
      <div className="login-field"><div className="field-heading"><label htmlFor="email">CORPORATE EMAIL <span>*</span></label><span className="field-example">e.g. h.pratama@estima.ops</span></div><div className="input-wrap"><LoginIcon name="email" /><input id="email" type="email" autoComplete="username" placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} /></div>{errors.email && <p id="email-error" className="field-error">{errors.email.message}</p>}</div>
      <div className="login-field"><div className="field-heading"><label htmlFor="password">PASSWORD <span>*</span></label><button type="button" className="text-link" onClick={() => setHelp("To reset your password, contact your project administrator through your company's IT support channel. Self-service recovery is not enabled yet.")}>Forgot password?</button></div><div className="input-wrap"><LoginIcon name="lock" /><input id="password" type={visible ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" aria-invalid={!!errors.password} aria-describedby={errors.password ? "password-error" : undefined} {...register("password")} /><button type="button" className="password-toggle" onClick={() => setVisible(!visible)} aria-label={visible ? "Hide password" : "Show password"} aria-pressed={visible}><LoginIcon name="eye" /></button></div>{errors.password && <p id="password-error" className="field-error">{errors.password.message}</p>}</div>
      <div className="login-field"><label className="field-label" htmlFor="workstation">DEFAULT PROJECT WORKSTATION</label><div className="input-wrap"><LoginIcon name="project" /><select id="workstation" disabled defaultValue="after-login"><option value="after-login">Select your assigned project after sign-in</option></select><span className="select-chevron"><LoginIcon name="chevron" /></span></div></div>
      <div className="remember-row"><label><input type="checkbox" {...register("rememberMe")} />Remember me on this device</label><span className="session-label"><span />Session protected</span></div>
      {error && <p className="login-alert" role="alert">{error}</p>}
      <Button className="login-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Signing in…" : "Sign In to Project Console"}<LoginIcon name="arrow" /></Button>
      <div className="federation"><div className="divider-label">OR CLIENT FEDERATION</div><div className="federation-options"><Button type="button" variant="outline" onClick={() => setHelp("Client SSO / SAML is not enabled for this workspace. Please use your corporate email and password.")}><LoginIcon name="key" />Client SSO / SAML</Button><Button type="button" variant="outline" onClick={() => setHelp("Field Inspector Badge sign-in is not enabled yet. Please use your assigned email and password.")}><LoginIcon name="badge" />Field Inspector Badge</Button></div></div>
    </form>
    <div className="login-support"><span><LoginIcon name="support" />Site IT Support</span><button className="text-link" type="button" onClick={() => setHelp("New accounts and project access are issued by your project administrator. Contact your company's IT support channel to request access.")}>Request Station Clearance</button></div>
    {help && <div className="login-help" role="status"><p>{help}</p><button type="button" className="text-link" onClick={() => setHelp(null)}>Dismiss</button></div>}
  </>;
}
