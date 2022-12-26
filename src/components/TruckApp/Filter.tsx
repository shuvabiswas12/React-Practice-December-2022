import React from 'react'

interface Props {
    years: string[]
    activeYear: string,
    onYearChangeHandler: (yearNo: string) => any

}

const Filter = (props: Props) => {

    const renderYearItems = () => props.years.map(year => <a onClick={() => props.onYearChangeHandler(year)} key={year} style={{ cursor: 'pointer' }} className={props.activeYear === year ? "list-group-item active" : "list-group-item"} > {year}</a >)
    return (
        <ul className="list-group mt-3" style={{ width: "200px" }}>
            {renderYearItems()}
        </ul>
    )
}

export default Filter