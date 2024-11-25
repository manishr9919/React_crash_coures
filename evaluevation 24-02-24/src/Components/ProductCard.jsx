export default function ProductCard({
    brand,
    category,
    price,
    id
}){
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td>
//     add Link here and keep the data-testid="brand" on Link tag      
            </td>
            <td data-testid="category">
            </td>
            <td data-testid="price">
            </td>
                    </tr>
    )
}
