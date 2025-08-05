import style from "./Header.module.css";

interface IHeaderProps {
  title: string | undefined;
  image: string | undefined;
}

export default function Header(props: IHeaderProps) {
  return (
    <header className={style.header}>
      <h1>{props.title}</h1>
      <img
        src={props.image ? props.image : "/images/post-image-test.png"}
        width="100%"
        height={300}
        alt={props.title}
      />
    </header>
  );
}
