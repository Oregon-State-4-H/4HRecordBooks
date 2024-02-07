import BackNavBtn from "./BackNavBtn"

function ActionBar(props){
    var title = props.title;
    var disableBack = props.disableBack;

    return (      
      <div className="actionBar">
        { disableBack ? null : <BackNavBtn /> }

        <h1 className="actionBarTitle">{title}</h1>
      </div>
    )
}

export default ActionBar;