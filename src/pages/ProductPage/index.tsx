import { useParams } from "react-router-dom"
import { mockData } from "../../../mock/mock-data"
import "./style.scss"
import { useState } from "react"

const ProductPage = () => {
    const { id } = useParams()
    const product = mockData.products.find(product => product.id === Number(id))
    const [selectedSize, setSelectedSize] = useState<number | null>(product?.size?.[0]?.id || null)
    const selectedIndex = product?.size?.findIndex(size => size.id === selectedSize) || 0;
    return (
        <div className="product-page">
            <div className="product-page__wrapper">
                <div className="product-page__image">
                    {product?.image.map((item, index) => (
                        <div className="product-page__image-item" key={index}>
                            {item?.idSize === selectedSize && (
                                <img height={400} width={400} src={item?.url} alt={`${item?.id}-img`} />
                            )}
                        </div>
                    ))}
                </div>
                <div className="product-page__detail">
                    <h2>{product?.name}</h2>
                    <div className="product-page__detail-price">
                        <span>{product?.size?.[selectedIndex]?.price}</span>
                    </div>
                    <div className="product-page__detail-size">
                        {product?.size && product?.size?.length > 1 && (
                            <p>Kích cỡ</p>
                        )}
                        <div className="product-page__detail-size-list">
                            {(product?.size && product?.size?.length > 1) && product?.size?.map((item, index) => (
                                <div className="product-page__detail-size-item" key={index}>
                                    <button onClick={() => setSelectedSize(item?.id)}>{item?.name}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="product-page__detail-description">
                        {product?.description?.map((item, index) => (
                            <div key={index}>
                                <p>{item?.title}</p>
                                <ul>
                                    {item?.content?.split('/n')?.map((c, index) => {
                                        return <li key={index}>{c}</li>
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage