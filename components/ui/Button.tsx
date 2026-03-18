import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = "",
            variant = "primary",
            size = "md",
            fullWidth = false,
            children,
            ...props
        },
        ref,
    ) => {
        const classes = [
            "btn",
            `btn--${variant}`,
            `btn--${size}`,
            fullWidth && "btn--full-width",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        );
    },
);

Button.displayName = "Button";
