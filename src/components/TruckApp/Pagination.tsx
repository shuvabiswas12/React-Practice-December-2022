import React from "react"
import { IPagination } from "../../models/IPagination"
import _ from 'lodash'

const Pagination = (props: IPagination) => {
    const totalPage: number = Math.ceil(props.totalTruck / props.pageNumber);
    const listOfPages: number[] = _.range(1, totalPage + 1)

    const renderPaginationItems = () => {
        if (totalPage <= 1) return []
        return listOfPages.map(page => <li key={page} className={props.currentPage === page ? "page-item active" : "page-item"}><a style={{ cursor: 'pointer' }} className="page-link" onClick={() => props.onPageChangeHandler(page)}>{page}</a></li>)
    }

    return (
        <div className="container d-flex align-items-center justify-content-center" aria-label="Page navigation example">
            <ul className="pagination">
                {renderPaginationItems()}
            </ul>
        </div>
    )
}

export default Pagination