import React from "react"
import { ITruck } from "../../models/ITruck"

interface Props {
    trucks: ITruck[]
    currentPage: number
}

const style = {
    tableText: {
        fontSize: "0.8rem"
    },
}

class Trucks extends React.Component<Props> {

    renderTableData = () => {
        return this.props.trucks.map((truck, index) =>
            <tr key={truck.itemsId}>
                <td>{((this.props.currentPage - 1) * 10) + (index + 1)}</td>
                <td className="w-50 px-4 py-2">{truck.title}</td>
                <td>${truck.price}</td>
                <td>{truck.mileage}</td>
                <td>{truck.productionDate}</td>
                <td>{truck.power}</td>
            </tr>)
    }

    render() {
        return <div className="container table-responsive">
            <table className="table table-sm table-striped table-hover" style={style.tableText}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Mileage</th>
                        <th>Production Date</th>
                        <th>Power</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>
        </div>
    }
}

export default Trucks