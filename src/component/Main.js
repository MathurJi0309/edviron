import React from "react";
import search from "./image/Rectangle 12.svg";
import first from "./image/Group 16.svg";
import second from "./image/Group 17.svg";
import third from "./image/Group 18.svg";
import filter from "./image/filter-search.svg";
import mulay from "./image/image 12.png";
import arrowup from "./image/arrow-up.png";
import glass from "./image/search-normal.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="content">
        <div className="search">
          <div className="searchbox">
            <img src={glass} />
            <span>Search users, payments</span>
          </div>
        </div>
        <div className="text">
          <span>In the last 30 days,</span>
        </div>
        <div className="list">
          <img src={first} />
          <img src={second} />
          <img src={third} />
        </div>
        <div className="middleheader">
          <div className="AllUsers">
            <span className="Usert">All users</span>
            <p className="usertext">Monitor sales, transactions, etc.</p>
          </div>
          <div className="midddleright">
            <div className="middlerightleft">
              <div className="middlerightleftsearch">
                <div className="middlerightleftmain">
                  <img src={glass} />
                  <span>Search transactions</span>
                </div>
              </div>
            </div>
            <div className="middlerightright">
              <img src={filter} />
              <span>Filter</span>
            </div>
          </div>
        </div>
        <div className="table">
          <span className="user">User</span>
          <span className="Status">Status</span>
          <span className="rating">Rating</span>
          <span className="quantity">Quantity</span>
          <span className="amount">Amount</span>
        </div>
        <div className="maintbale">
        <div className="tablecontaint">
          <div className="profile">
            <img src={mulay} />
            <span>Mulay</span>
          </div>
          
            <span className="verified">Verified</span>
          
            <div className="rate"></div>
            <span className="forty">40%</span>
          <div className="arrow">
            <img src={arrowup} />
            <span>4%</span>
          </div>
            <span className="mainquantity">400</span>
            <span className="mainprice">$400,000</span>
        </div>
        <div className="tablecontaint">
          <div className="profile">
            <img src={mulay} />
            <span>Mulay</span>
          </div>
          
            <span className="verified">Verified</span>
          
            <div className="rate"></div>
            <span className="forty">40%</span>
          <div className="arrow">
            <img src={arrowup} />
            <span>4%</span>
          </div>
            <span className="mainquantity">400</span>
            <span className="mainprice">$400,000</span>
        </div>
        <div className="tablecontaint">
          <div className="profile">
            <img src={mulay} />
            <span>Mulay</span>
          </div>
          
            <span className="verified">Verified</span>
          
            <div className="rate"></div>
            <span className="forty">40%</span>
          <div className="arrow">
            <img src={arrowup} />
            <span>4%</span>
          </div>
            <span className="mainquantity">400</span>
            <span className="mainprice">$400,000</span>
        </div>
        <div className="tablecontaint">
          <div className="profile">
            <img src={mulay} />
            <span>Mulay</span>
          </div>
          
            <span className="verified">Verified</span>
          
            <div className="rate"></div>
            <span className="forty">40%</span>
          <div className="arrow">
            <img src={arrowup} />
            <span>4%</span>
          </div>
            <span className="mainquantity">400</span>
            <span className="mainprice">$400,000</span>
        </div>
        <div className="tablecontaint">
          <div className="profile">
            <img src={mulay} />
            <span>Mulay</span>
          </div>
          
            <span className="verified">Verified</span>
          
            <div className="rate"></div>
            <span className="forty">40%</span>
          <div className="arrow">
            <img src={arrowup} />
            <span>4%</span>
          </div>
            <span className="mainquantity">400</span>
            <span className="mainprice">$400,000</span>
        </div>
        <div className="tablecontaint">
          <div className="profile">
            <img src={mulay} />
            <span>Mulay</span>
          </div>
          
            <span className="verified">Verified</span>
          
            <div className="rate"></div>
            <span className="forty">40%</span>
          <div className="arrow">
            <img src={arrowup} />
            <span>4%</span>
          </div>
            <span className="mainquantity">400</span>
            <span className="mainprice">$400,000</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
