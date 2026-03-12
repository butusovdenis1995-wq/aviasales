import styles from "./WrapperCard.module.scss";

interface WrapperCardProps {
  children: React.ReactNode;
  className: string;
}

function WrapperCard(props: WrapperCardProps) {
  const classes = styles.wrapperCard + " " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default WrapperCard;
