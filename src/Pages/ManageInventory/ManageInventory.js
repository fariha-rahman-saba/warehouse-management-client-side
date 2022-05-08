import useItems from '../../hooks/useItems';
import './ManageInventory.css';
import SingleManageInventoryItem from '../SingleManageInventoryItem/SingleManageInventoryItem';

const ManageInventory = () => {
    const [items, setItems] = useItems();

    return (
        <div>
            <h1 className='text-center mt-5'>Inventory Items</h1>
            <div className='items'>
                {
                    items.map(item => <SingleManageInventoryItem key={item._id} item={item}></SingleManageInventoryItem>)

                }
            </div>
        </div>

    );
};

export default ManageInventory;