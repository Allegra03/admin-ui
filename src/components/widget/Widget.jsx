import React, { useState, useEffect } from 'react';
import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(0);
  const [diff, setDiff] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    let title, isMoney, link, query, icon;

    switch (type) {
      case 'user':
        title = 'USERS';
        isMoney = false;
        link = 'See all users';
        query = 'users';
        icon = (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        );
        break;
      case 'categories':
        title = 'CATEGORIES';
        isMoney = false;
        link = 'View All Categories';
        query = 'mylist';
        icon = (
          <CategoryRoundedIcon
            className="icon"
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'purple',
            }}
          />
        );
        break;
      case 'products':
        title = 'PRODUCTS';
        isMoney = false;
        link = 'View all products';
        query = 'products';
        icon = (
          <Inventory2Icon
            className="icon"
            style={{
              backgroundColor: 'rgba(0, 0, 255, 0.2)',
              color: 'blue',
            }}
          />
        );
        break;
      default:
        break;
    }

    setData({ title, isMoney, link, icon, query });

    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, data.query));
      setAmount(querySnapshot.docs.length);
    };
    fetchData();
  }, [type, data]);

  return (
    <div className="widget">
      {data && (
        <div>
          <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">
              {data.isMoney && '$'} {amount}
            </div>
            <div className="link">{data.link}</div>
          </div>
          <div className="right">
            <div
              className={`percentage ${diff < 0 ? 'negative' : 'positive'}`}
            >
              {diff < 0 ? (
                <KeyboardArrowDownIcon fontSize="small" />
              ) : (
                <KeyboardArrowUpIcon fontSize="small" />
              )}
              <span
                className={`percentage ${diff < 0 ? 'negative' : 'positive'}`}
              >
                {diff} %
              </span>
            </div>
            {data.icon}
          </div>
        </div>
      )}
    </div>
  );
};

export default Widget;