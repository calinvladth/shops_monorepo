import Style from './shop-filters.styled'
import {useState} from "react";
import ShopFiltersOptions from "./shop-filters-options";
import {Button} from "../button/button";

export function ShopFilters() {
  const [showFilters, setShowFilters] = useState(false)

  return <Style.Container>
    <Style.ContainerShell justifyContent="flex-start">
      <Button buttonType="success" onClick={() => setShowFilters(!showFilters)}>{showFilters ? 'Close Filters' : 'Open Filters'}</Button>
    </Style.ContainerShell>
    <Style.ContainerShell justifyContent="flex-end">
      <Style.ContainerInfo>
        Showing 20 results
      </Style.ContainerInfo>
    </Style.ContainerShell>
    <ShopFiltersOptions show={showFilters}/>
  </Style.Container>
}
