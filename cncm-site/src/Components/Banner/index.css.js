export default function styles(theme) {
  return {
    bannerContainer: {
      background: theme.palette.text.primary,
      padding: theme.spacing(1, 2),
      fontSize: "1.5rem",
      color: theme.palette.background.default
    },
    notification: {
      fontSize: "1.5rem",
      padding: theme.spacing(1.5)
    },
    icon: {
      color: theme.palette.background.default
    }
  };
}
