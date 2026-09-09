import './msg.css'

function MsgBox({ userName, textColor }) {        // ✅ Capital name, destructured props
  let style = { backgroundColor: textColor };
  return (
    <div className="box" style={style}>           
      <h3>{userName}</h3>
    </div>
  );
}
export default MsgBox;
