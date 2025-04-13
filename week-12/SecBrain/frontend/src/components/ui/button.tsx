import { ReactNode } from "react";

export const buttonVariants = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-blue-200 text-blue-900 hover:bg-blue-300",
} as const;

export const buttonSizes = {
  sm: "text-sm p-2",
  md: "text-base p-1.5 w-28",
  lg: "text-lg px-6 py-3 w-42 font-normal",
} as const;

type VariantType = keyof typeof buttonVariants;
type SizeType = keyof typeof buttonSizes;


export interface ButtonProps {
  variant: VariantType;
  innerText: string;
  size: SizeType;
  icon?: ReactNode;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const { variant, innerText, size, icon, onClick } = props;

  return (
    <div onClick={onClick} 
	  className={`${buttonVariants[variant]} ${buttonSizes[size]} rounded-xl inline-flex items-center justify-center gap-2`}>
      {icon}
      {innerText}
    </div>
  );
};
