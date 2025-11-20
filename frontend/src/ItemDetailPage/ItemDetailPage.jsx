import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ItemDetailPage.module.css';
//EXAMPLE USAGE: http://localhost:____/items/12 will bring up this page


function ItemDetailPage() {

    //Creating test violin item and seller
    const { itemId } = useParams();
    const testItem = {
        id: "12",
        title: "Test Item: Used Violin",
        value: 150,
        description: "A well-maintained used violin, perfect for any players. Comes with a bow and case.",
        imageUrl: "https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg",
        sellerName: "John Doe",
        sellerId: "user123"

    }
    const testSeller = {
        id: "user123",
        name: "John Doe",
        profileImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Microsoft_Account_Logo.svg"
    }


    const [item, setItem] = useState(testItem);
    const [seller, setSeller] = useState(testSeller);

    const [loading, setLoading] = useState(false);   
    const [error, setError] = useState(null);

    // Get item that is requested once backend is implemented
    /*
    useEffect(() => {
        async function fetchItemDetails() {
            try {
                const response = await fetch(`http://localhost:5000/api/items/${itemId}`);
                if (!response.ok) {
                    throw new Error('Item not found');
                }
                const data = await response.json();
                setItem(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchItemDetails();
    }, [itemId]);
    */

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }
    if (error) {
        return <div className={styles.error}>Error: {error}</div>;
    }
    if (!item) {
        return <div className={styles.error}>Item not found</div>;
    }

    //Display page with data from test item for now
    return (
        <div className={styles.container}>
            <img src={item.imageUrl} alt={item.title} className={styles.itemImage} />
            <div className={styles.details}>
                <h1 className={styles.title}>{item.title}</h1> 
                <p className={styles.price}>Value: ${item.value}</p>
                <h2 className={styles.descriptionHeader}>Description:</h2>
                <p className={styles.description}>{item.description}</p>

                <p className={styles.sellerHeader}>Seller:</p>
                <Link to={`/profile/${seller.id}`} className={styles.sellerInfo}>
                    <img src={seller.profileImageUrl} alt={`${item.sellerName}'s profile`} className={styles.sellerImage} />
                    <span>{item.sellerName}</span>
                    </Link>

                <button className={styles.offerButton}>Make an Offer</button>

            </div>
        </div>
    );
}
export default ItemDetailPage;