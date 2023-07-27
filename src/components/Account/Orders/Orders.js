import './Orders.scss';
import Table from "components/Table";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Eye } from 'components/ImageList';
import { useState } from 'react';
import Modal from "components/Modal";

export const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders);
    const [selectedOrder, setSelectedOrder] = useState({ modal: false, order: '' });

    useEffect(() => {
        dispatch.orders.fetchOrders();
    }, [dispatch.orders])

    //Handle open/close modal
    const handleOpenModal = (order) => {
        setSelectedOrder({ modal: !selectedOrder.modal, order });
        dispatch.orders.getOrderById(order.orderid)
    }

     // Create head cell
    const headCells = [
        {
            id: 'id',
            numeric: 'center',
            disablePadding: true,
            label: 'ID',
        },
        {
            id: 'date',
            numeric: 'center',
            disablePadding: true,
            label: 'Date',
        },
        {
            id: 'status',
            numeric: 'center',
            disablePadding: false,
            label: 'Status',
        },
        {
            id: 'total',
            numeric: 'center',
            disablePadding: false,
            label: 'Total',
        },
        {
            id: 'detail',
            numeric: 'center',
            disablePadding: false,
            label: 'Detail',
        },
    ];

    // Create keys data
    function createData(id, date, status, total, detail) {
        return {
            id,
            date,
            status,
            total,
            detail
        };
    }
    // Create values data
    const rows = orders.orderList?.map(order => 
        createData(order.orderid, order.DateOrder, order.status, order.totalprice, <Eye onClick={() => handleOpenModal(order)}/>)
    );

    //* *************************  ORDER DETAIL ****************************************** *//

    const headCellsPdDetail = [
        {
            id: 'id',
            numeric: 'center',
            disablePadding: true,
            label: 'ID',
        },
        {
            id: 'name',
            numeric: 'center',
            disablePadding: true,
            label: 'Name',
        },
        {
            id: 'quantity',
            numeric: 'center',
            disablePadding: false,
            label: 'Quantity',
        },
        {
            id: 'price',
            numeric: 'center',
            disablePadding: false,
            label: 'Price',
        },
        {
            id: 'size',
            numeric: 'center',
            disablePadding: false,
            label: 'Size',
        },
        {
            id: 'color',
            numeric: 'center',
            disablePadding: false,
            label: 'Color',
        },
    ];
    // Create keys data
    function createDataDetail(id, productName, color, size, quantity, price) {
        return {
            id,
            productName, 
            color, 
            size, 
            quantity, 
            price,
        };
    }
    // Create values data
    const rowsPdDetail = orders.order?.map(order => {
        return createDataDetail(order.orderDetailId, order.productName, order.colorName, order.sizeName, order.quantityOrder, order.unitPrice)
    });

    // Title modal add order detail
    const TitleOrderModal = (
        <h3 style={{ fontFamily: "'Oswald', sans-serif" }}>Order Detail</h3>
    );

    const TableOrderDetail = (
        <Table 
            key={2}
            headCells={headCellsPdDetail}
            rows={rowsPdDetail}
        />
    )

    if(!orders.orderList) {
        return <div>Loading...</div>
    }

    return (
        <div className='orders'>
            <div className='orders__container'>
                <h1>Order List</h1>
                <div className='orders__table'>
                    <Table 
                        key={1}
                        headCells={headCells}
                        rows={rows}
                    />
                </div>
            </div>
            <Modal title={TitleOrderModal} content={TableOrderDetail} selectedOrder={selectedOrder} />
        </div>
    )
}