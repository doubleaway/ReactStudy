import '../styles/ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>2023년 6월 27일</div>
            <div className="expense-item__description">
                <h2>Car Insurance </h2>
                <div className="expense-item__price">$200.23</div>
            </div>
        </div>
    )
}

export default ExpenseItem;