import { Box, Button, Grid, Stack } from "@mui/material";

interface ButtonProps {
  size: "small" | "large" | "medium" | undefined;
  sx: {
    bgcolor: string;
    color: string;
    border: string;
  };

  children: string;
  startIcon: JSX.Element;
}

export const MyButton: React.FC<ButtonProps> = ({
  startIcon,
  children,

  size,
  sx: { bgcolor, color, border },
}) => {
  return (
    <Button
      size={size}
      variant="contained"
      sx={{
        backgroundColor: { bgcolor },
        color: { color },
        border: { border },
      }}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
};
