import useItems from '../../hooks/useItems';
import './ManageInventory.css';
import SingleManageInventoryItem from '../SingleManageInventoryItem/SingleManageInventoryItem';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {

    const navigate = useNavigate();

    const goToAddItems = () => {
        navigate(`/add-items/`);
    };

    const [items, setItems] = useItems();

    return (
        <div>
            <h1 className='mt-5 mb-3'>Inventory Items</h1>
            <div className='manage-inventory-items '>
                {
                    items.map(item => <SingleManageInventoryItem key={item._id} item={item}></SingleManageInventoryItem>)

                }
            </div>
            <Button variant="warning" className='mt-5 mb-5 w-25' onClick={() => goToAddItems()}>Add New Item</Button>
        </div>

    );
};

export default ManageInventory;