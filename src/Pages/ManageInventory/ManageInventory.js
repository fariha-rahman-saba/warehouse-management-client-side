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
            <h1 className='text-center mt-5'>Inventory Items</h1>
            <div className='items'>
                {
                    items.map(item => <SingleManageInventoryItem key={item._id} item={item}></SingleManageInventoryItem>)

                }
            </div>
            <Button variant="warning" className='mb-5 w-25' onClick={() => goToAddItems()}>Add New Item</Button>
        </div>

    );
};

export default ManageInventory;