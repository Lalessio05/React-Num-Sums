
const Cell = ({ size, number,onClick }: {size:number,number:{id: {row:number,col:number},value:number},onClick:Function}) => {
  const squareStyle = {
    width: `${size}px`,
    height: `${size}px`,
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem', // Change the font size as needed
  };

  return (
    <div style={squareStyle} onClick={(_)=>onClick(number)}>
      {number.value}
    </div>
  );
};

export default Cell;
