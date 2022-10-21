

function Listing({ items }) {

    const itemImage = (MainImage) => {
        return MainImage?.url_570xN ?? "";
    }

    const itemPrice = (currency_code, price) => {
        switch (currency_code) {
            case "USD": return ('$' + price)
            case "EUR": return ('€' + price)
            default: return (price + " " + currency_code)
        }
    }

    return (
        <div className="item-list">
            {items.map((
                {
                    listing_id,
                    url,
                    MainImage,
                    title,
                    currency_code,
                    price,
                    quantity
                }) => (

                < div className="item" key={listing_id} >
                    <div className="item-image">
                        <a href={url}>
                            <img src={itemImage(MainImage)} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{title}</p>
                        <p className="item-price">{itemPrice(currency_code, price)}</p>
                        <p className={quantity <= 10 ? "item-quantity level-low" : quantity <= 20 ? "item-quantity level-medium" : "item-quantity level-high"
                        }
                        > {quantity} left</p>
                    </div>
                </div >
            ))}
        </div >
    );
}

export default Listing;