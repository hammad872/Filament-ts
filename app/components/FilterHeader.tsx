import { Disclosure } from "@headlessui/react"
import { useContext } from "react"
import { Text, IconCaret } from "~/components"
import { FilterContext } from "~/routes/($locale).filaments"
import { formatString } from "~/lib/utils"

export function FilterSection({ category, values, id }) {
    return (
        <Disclosure as="div" key={id} className="w-full" defaultOpen={true}>
            {({open}) => (
                <>
                    <Disclosure.Button className="flex justify-between w-full py-4">
                        <Text size="lead">{category === 'materialType' ? 'Material Type' : formatString(category)}</Text>
                        <IconCaret direction={open ? 'up' : 'down'} />
                    </Disclosure.Button>
                    <Disclosure.Panel key={id}>
                        <ul key={id} className="py-2">
                            {values?.map((value, index) =>
                                category === 'materialType' ? 
                                <FilterItem 
                                    value={value.title} 
                                    index={index} 
                                    key={value.title}
                                    description={value.description}
                                    category={category}
                                /> :
                                <FilterItem 
                                    value={value} 
                                    index={index}
                                    key={value}
                                    category={category}
                                />
                            )}
                        </ul>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export function InStockFilter() {
    const filter = useContext(FilterContext)
    const id = 'in stock'
    return (
        <Disclosure as="div" key={id} className="w-full" defaultOpen={true}>
            {({open}) => (
                <>
                    {/* <Disclosure.Button className="flex justify-between w-full py-4">
                        <Text size="lead">In Stock</Text>
                        <IconCaret direction={open ? 'up' : 'down'} />
                    </Disclosure.Button>
                    <Disclosure.Panel key={id}> */}
                        <ul key={id} className="py-2">
                            <li className="pb-4">
                                <input 
                                    type="checkbox" 
                                    id="in stock" 
                                    className='checkbox text-buttonPrimary rounded'
                                    defaultChecked={filter.inStockOnly}
                                    onChange={(e) => {
                                        filter.setInStockOnly(!filter.inStockOnly)
                                    }}
                                />
                                <label 
                                    htmlFor="in stock" 
                                    className='pl-2'
                                    >
                                        In stock
                                    <br/>
                                </label>
                            </li>
                        </ul>
                    {/* </Disclosure.Panel> */}
                </>
            )}
        </Disclosure>
    )
}

export function FilterItem({ value, index, description = '', category }) {
    const filters = useContext(FilterContext)
    if (filters?.selectedFilters[category]) {
        return (
            <li key={index} className="pb-4">
            <input 
                id={value}
                className='checkbox text-buttonPrimary rounded' 
                checked={(filters?.selectedFilters[category][value]) || false}
                type='checkbox' 
                onChange={(e) => {
                    filters.setSelectedFilters({...filters.selectedFilters, [category]: {...filters.selectedFilters[category], [value]: e.currentTarget.checked}})
                }}
                />
            <label 
                htmlFor={value} 
                className='pl-2'
                >
                {formatString(value)}
                <br/>
                <Text color='subtle'>
                {description}
                </Text>
            </label>
        </li>
    )
}
}
