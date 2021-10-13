function DateTable(props){
    return(
        <div className="date-table">
            <span>De {props.initDate} até {props.finishDate}</span>
        </div>
    )
}

export default DateTable