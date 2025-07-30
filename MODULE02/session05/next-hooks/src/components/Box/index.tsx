interface IBox {
  index: number;
}

export default function Box(props: IBox) {
  return (
    <div style={{ width: 100, height: 100, backgroundColor: "purple" }}>
      BOX : {props.index}
    </div>
  );
}
