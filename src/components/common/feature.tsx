interface FeatureProps {
  type: "one" | "two" | "three" | "why";
}

export default function Feeature({ type }: FeatureProps) {
  const colorClass = () => {
    switch (type) {
      case "one":
        return "border-blue-700 text-blue-700";
      case "two":
        return "border-green-500 text-green-700";
      case "three":
        return "border-pink-500 text-pink-700";
      case "why":
        return "border-blue-700 text-blue-700";
      default:
        return "";
    }
  };

  return (
    <div
      className={`inline-flex h-[35px] items-center justify-center rounded-[50px] border bg-grayscale-100 py-2 px-[25px] text-b2 font-creato italic font-medium ${colorClass()}`}>
      <p className="italic font-medium text-[16px] font-creato500">
        {type === "one"
          ? "Feature 1"
          : type === "two"
            ? "Feature 2"
            : type === "three"
              ? "Feature 3"
              : "Why Zaply?"}
      </p>
    </div>
  );
}
