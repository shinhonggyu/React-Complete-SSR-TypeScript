import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses({ items }) {
  const filterChangeHandler = (selectedYear) => {
    // 큰거온다
    console.log('Expenses.jsx');
    console.log(selectedYear);
    console.log(items[0].date.getFullYear());
  };

  // items.filter(item => {
  //   if (item.date.getFullYear() === selectedYear) {
  //     return <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  //   }
  // })

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </Card>
  );
}

export default Expenses;
