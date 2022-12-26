import React, { ChangeEvent } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/TruckApp/Filter';
import Pagination from './components/TruckApp/Pagination';
import SearchBox from './components/TruckApp/SearchBox';
import Trucks from './components/TruckApp/Trucks';
import data from "./services/truckdetails.json"

class TruckApp extends React.Component {
    state = {
        truckList: data,
        filteredTrucks: data,
        currentPage: 1,
        currentYear: 'all',
        pageNumber: 10,
    }

    onYearChangeHandler = (yearNo: string) => {
        this.setState(() => {
            this.state.currentYear = yearNo
            this.state.currentPage = 1
        })

        this.setState(() => {
            if (yearNo === 'all') {
                return this.state.filteredTrucks = this.state.truckList
            } else {
                return this.state.filteredTrucks = this.state.truckList.filter(truck => truck.productionDate === yearNo)
            }
        })
    }

    onPageChangeHandler = (pageNo: number) => this.setState(() => this.state.currentPage = pageNo)

    getTrucksByPageNo = () => this.state.filteredTrucks.slice((this.state.currentPage - 1) * 10, ((this.state.currentPage) * 10))

    getTrucksByProductionYear = () => {
        let productionYears = new Set<string>()
        let years: string[] = []
        years.push('all')
        this.state.truckList.forEach(truck => {
            if (!productionYears.has(truck.productionDate)) {
                productionYears.add(truck.productionDate);
                years.push(truck.productionDate);
            }
        })
        return years
    }

    handleSearchInputs = (value: string) => {
        const valueInLowercase = value.toLowerCase()
        if (valueInLowercase.length === 0) {
            this.setState({ filteredTrucks: this.state.truckList, currentPage: 1, currentYear: 'all' })
            return
        }

        let temp = this.state.truckList.filter(truck => {
            if (truck.title.toLowerCase().includes(valueInLowercase)) return truck
            else if (parseInt(truck.price.replace(",", '')) >= parseInt(valueInLowercase.replace(",", ''))) return truck
            return null
        })
        this.setState({ filteredTrucks: temp, currentPage: 1 })
    }

    render(): React.ReactNode {
        return <>
            <Navbar brandName='TruckShop' notificationsValue={this.state.truckList.length} />

            <SearchBox onSearchHandler={this.handleSearchInputs} />

            <div className='container d-flex'>
                <Filter onYearChangeHandler={this.onYearChangeHandler} years={this.getTrucksByProductionYear()} activeYear={this.state.currentYear} />
                <Trucks trucks={this.getTrucksByPageNo()} currentPage={this.state.currentPage} />
            </div>
            <Pagination currentPage={this.state.currentPage} totalTruck={this.state.filteredTrucks.length} pageNumber={this.state.pageNumber} onPageChangeHandler={this.onPageChangeHandler} />
        </>
    }
}

export default TruckApp