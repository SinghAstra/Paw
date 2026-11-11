"use client";

import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { learnerOptions, programmeOptions } from "@/lib/data/studio";

type Errors = Partial<Record<"name" | "email" | "programme" | "learner" | "consent", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [programme, setProgramme] = useState("");
  const [learner, setLearner] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const fieldClass =
    "h-11 rounded-xl border-ink/15 bg-cream/60 px-3.5 text-[0.9rem] text-ink placeholder:text-ink/35 focus-visible:border-violet focus-visible:ring-violet/20";

  const validate = () => {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please tell us your name.";
    if (!emailPattern.test(email.trim()))
      next.email = "Enter a valid email address.";
    if (!programme) next.programme = "Choose a programme or ask for guidance.";
    if (!learner) next.learner = "Select the option that fits you best.";
    if (!consent) next.consent = "We need your consent to send the syllabus.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("done"), 700);
  };

  if (status === "done") {
    return (
      <div className="flex h-full flex-col justify-center rounded-[1.4rem] bg-white p-8 text-ink shadow-[0_30px_70px_-40px_rgba(0,0,0,0.5)] md:p-10">
        <span className="grid size-12 place-items-center rounded-full bg-lime">
          <Check className="size-6 text-ink" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
          You&apos;re on the list.
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/60">
          Check your inbox for the syllabus. An advisor follows up within 2
          working days to help you choose the right programme.
        </p>
        <p className="mt-5 rounded-xl bg-linen px-4 py-3 text-xs text-ink/55">
          Sent to <span className="font-medium text-ink">{email}</span>
        </p>
        <Button
          type="button"
          variant="ink"
          size="cta"
          className="mt-6 w-fit"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setProgramme("");
            setLearner("");
            setWhatsapp("");
            setConsent(false);
            setErrors({});
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-[1.4rem] bg-white p-5 text-ink shadow-[0_30px_70px_-40px_rgba(0,0,0,0.5)] md:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="name" className="text-[0.78rem] font-medium text-ink/70">
            Full name <span className="text-violet">*</span>
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className={cn(fieldClass, "mt-1.5")}
          />
          {errors.name ? (
            <p className="mt-1 text-[0.7rem] text-destructive">{errors.name}</p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <Label htmlFor="email" className="text-[0.78rem] font-medium text-ink/70">
            Email address <span className="text-violet">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={cn(fieldClass, "mt-1.5")}
          />
          {errors.email ? (
            <p className="mt-1 text-[0.7rem] text-destructive">{errors.email}</p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <Label htmlFor="programme" className="text-[0.78rem] font-medium text-ink/70">
            I&apos;m interested in <span className="text-violet">*</span>
          </Label>
          <Select
            items={programmeOptions}
            value={programme}
            onValueChange={(value) => setProgramme(value as string)}
          >
            <SelectTrigger
              id="programme"
              aria-invalid={Boolean(errors.programme)}
              className={cn(
                fieldClass,
                "mt-1.5 flex w-full justify-between",
                !programme && "text-ink/40",
              )}
            >
              <SelectValue placeholder="Select programme" />
            </SelectTrigger>
            <SelectContent>
              {programmeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.programme ? (
            <p className="mt-1 text-[0.7rem] text-destructive">
              {errors.programme}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <Label htmlFor="learner" className="text-[0.78rem] font-medium text-ink/70">
            I am a <span className="text-violet">*</span>
          </Label>
          <Select
            items={learnerOptions}
            value={learner}
            onValueChange={(value) => setLearner(value as string)}
          >
            <SelectTrigger
              id="learner"
              aria-invalid={Boolean(errors.learner)}
              className={cn(
                fieldClass,
                "mt-1.5 flex w-full justify-between",
                !learner && "text-ink/40",
              )}
            >
              <SelectValue placeholder="Student / professional" />
            </SelectTrigger>
            <SelectContent>
              {learnerOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.learner ? (
            <p className="mt-1 text-[0.7rem] text-destructive">{errors.learner}</p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="whatsapp" className="text-[0.78rem] font-medium text-ink/70">
            WhatsApp number{" "}
            <span className="font-normal text-ink/35">(optional)</span>
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            placeholder="+91 98765 43210"
            autoComplete="tel"
            className={cn(fieldClass, "mt-1.5")}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="flex cursor-pointer items-start gap-2.5 text-[0.72rem] leading-relaxed text-ink/55">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-0.5 size-4 shrink-0 accent-violet"
            aria-invalid={Boolean(errors.consent)}
          />
          <span>
            I agree to be contacted about this enquiry.{" "}
            <span className="underline decoration-ink/25 underline-offset-2">
              Privacy policy
            </span>
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-1 text-[0.7rem] text-destructive">{errors.consent}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        variant="ink"
        size="cta-lg"
        className="mt-5 w-full"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <ArrowRight className="size-4" />
        )}
        {status === "sending" ? "Sending the syllabus" : "Send me the syllabus"}
      </Button>

      <p className="mt-3 text-center text-[0.68rem] text-ink/40">
        No payment required. Unsubscribe from follow-ups anytime.
      </p>
    </form>
  );
}
