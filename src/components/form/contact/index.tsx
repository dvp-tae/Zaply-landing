import { useForm, ValidationError } from "@formspree/react";
import { CheckBoxIcon } from "../../Icons";
import { useEffect, useState } from "react";
import { cn } from "@/hooks/utils";

export default function ContactForm() {
  const formId = `${process.env.NEXT_PUBLIC_FORM_ID}`;

  const [isAgree, setIsAgree] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [state, handleSubmit] = useForm(formId);

  useEffect(() => {
    setIsFormValid(name.trim() !== "" && email.trim() !== "" && isAgree);
  }, [name, email, isAgree]);

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setIsAgree(false);

      alert("사전 등록이 성공적으로 완료되었습니다. 감사합니다!");
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="flex flex-col gap-[11px]">
        <label htmlFor="name" className="text-sm font-semibold text-grayscale-700">
          이름 혹은 닉네임
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="이재플"
          required
          className="w-full rounded-[12px] bg-grayscale-100 text-center py-[10px] px-[39px] text-sm font-medium text-grayscale-700 placeholder:text-grayscale-500"
        />
        <ValidationError prefix="이름 혹은 닉네임" field="name" errors={state.errors} />
      </div>

      <div className="flex flex-col gap-[11px]">
        <label htmlFor="email" className="text-sm font-semibold text-grayscale-700">
          이메일
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="zaply.offical@gmail.com"
          required
          className="w-full rounded-[12px] bg-grayscale-100 text-center py-[10px] px-[39px] text-sm font-medium text-grayscale-700 placeholder:text-grayscale-500"
        />
        <ValidationError prefix="이메일" field="email" errors={state.errors} />
      </div>

      <div className="flex flex-col gap-[11px]">
        <p className="font-semibold text-b3 text-grayscale-700">
          개인정보 수집 및 이용 동의 (재플리 사전 등록)
        </p>
        <p className="text-b4 text-grayscale-700">
          Zaply 서비스 사전 등록을 위해 개인정보보호법에 따라 동의가 필요합니다. 서비스 베타테스트
          소식 전송을 위해 [이름 혹은 닉네임, 이메일 주소] 항목에 대하여 수집일로부터 1년간 보유 후
          폐기합니다. 이에 동의하십니까?
        </p>
      </div>

      <button
        type="button"
        onClick={() => setIsAgree(!isAgree)}
        className={cn(
          "rounded-[12px] py-[10px] px-[39px] flex justify-center items-center gap-[10px] w-full border",
          {
            "bg-blue-100 border-blue-500": isAgree,
            "bg-grayscale-100/80 border-grayscale-100/80": !isAgree,
          }
        )}>
        <CheckBoxIcon color={isAgree ? "#22C7FA" : "#BDC5D0"} />
        <p
          className={cn("font-medium text-b3", {
            "text-blue-blueblack": isAgree,
            "text-grayscale-500": !isAgree,
          })}>
          동의합니다.
        </p>
      </button>

      <button
        type="submit"
        disabled={!isFormValid || state.submitting}
        className={cn(
          "rounded-[12px] py-[10px] px-[39px] flex justify-center items-center gap-[10px] w-full text-b2 font-semibold text-white",
          {
            "bg-blue-blueblack": isFormValid && !state.submitting,
            "bg-grayscale-400": !isFormValid || state.submitting,
          }
        )}>
        사전 등록 제출하기
      </button>
    </form>
  );
}
