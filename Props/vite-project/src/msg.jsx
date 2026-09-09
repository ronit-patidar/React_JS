import MsgBox from './msg_box.jsx';             // ✅ Capital import name

function Msg() {                                  // ✅ Capital function name
  return (
    <div>
      <MsgBox userName="ronit" textColor="green" />
      <MsgBox userName="alex"  textColor="tomato" />
      <MsgBox userName="john"  textColor="blue" />
    </div>
  );
}
export default Msg;