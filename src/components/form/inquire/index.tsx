import { useForm, ValidationError } from "@formspree/react";
import { CheckBoxIcon } from "../../Icons";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/hooks/utils";

export default function InquireForm() {
  const formId = `${process.env.NEXT_PUBLIC_FORM_ID}`;

  const [isAgree, setIsAgree] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [state, handleSubmit] = useForm(formId);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "41px";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 188)}px`;
    }
  };

  useEffect(() => {
    setIsFormValid(
      name.trim() !== "" &&
        email.trim() !== "" &&
        phoneNumber.trim() !== "" &&
        inquiry.trim() !== "" &&
        isAgree
    );
  }, [name, email, phoneNumber, inquiry, isAgree]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [inquiry]);

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setPhoneNumber("");
      setInquiry("");
      setIsAgree(false);

      alert("문의 사항 제출이 성공적으로 완료되었습니다. 감사합니다!");
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="flex flex-col gap-[11px]">
        <label htmlFor="name" className="text-sm font-semibold text-grayscale-700">
          담당자
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
        <ValidationError prefix="담당자" field="name" errors={state.errors} />
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
        <label htmlFor="phoneNumber" className="text-sm font-semibold text-grayscale-700">
          연락처
        </label>
        <input
          id="phoneNumber"
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          placeholder="010-0000-0000"
          required
          className="w-full rounded-[12px] bg-grayscale-100 text-center py-[10px] px-[39px] text-sm font-medium text-grayscale-700 placeholder:text-grayscale-500"
        />
        <ValidationError prefix="연락처" field="phoneNumber" errors={state.errors} />
      </div>

      <div className="flex flex-col gap-[11px]">
        <label htmlFor="email" className="text-sm font-semibold text-grayscale-700">
          문의내용
        </label>
        <textarea
          id="inquiry"
          name="inquiry"
          ref={textareaRef}
          value={inquiry}
          onChange={e => setInquiry(e.target.value)}
          placeholder="자유롭게 문의 사항이나 의견을 남겨주세요."
          required
          className="resize-none w-full h-auto overflow-y-auto rounded-[12px] bg-grayscale-100 text-center py-[10px] px-5 text-sm font-medium text-grayscale-700 placeholder:text-grayscale-500"
        />
        <ValidationError prefix="문의내용" field="inquiry" errors={state.errors} />
      </div>

      <div className="flex flex-col gap-[11px]">
        <p className="font-semibold text-b3 text-grayscale-700">
          개인정보 수집 및 이용 동의 (재플리 문의사항)
        </p>
        <p className="text-b4 text-grayscale-700">
          문의사항 등록을 위해 개인정보보호법에 따라 동의가 필요합니다. 서비스 답변 확인을 위해
          [이름, 이메일 주소, 연락처] 항목에 대하여 수집일로부터 6개월 간 보유 후 폐기합니다. 이에
          동의하십니까?
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
        문의 사항 제출하기
      </button>
    </form>
  );
}
