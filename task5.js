const transactions = [
  { userID: "user1", amount: 200, date: "2023-01-01" },
  { userID: "user2", amount: 500, date: "2023-01-02" },
  { userID: "user1", amount: 300, date: "2023-01-03" },
  { userID: "user3", amount: 400, date: "2023-01-01" },
  { userID: "user2", amount: 150, date: "2023-01-04" },
  { userID: "user3", amount: 250, date: "2023-01-02" },
  { userID: "user4", amount: 100, date: "2023-01-01" },
];

// 1. Сгруппируйте транзакции по userID.

const groupedByUserID = transactions.reduce((acc, user) => {
  const userId = user.userID;

  acc[userId] = acc[userId] || [];
  acc[userId].push(user);

  return acc;
}, {});

console.log(groupedByUserID);

// 2. Для каждого пользователя вычислите общую сумму транзакций.

const totalByUser = Object.entries(groupedByUserID).reduce(
  (acc, [userId, userTransactions]) => {
    acc[userId] = userTransactions.reduce((sum, { amount }) => sum + amount, 0);

    return acc;
  },
  {}
);

console.log(totalByUser);

// 3. Отсортируйте пользователей по убыванию общей суммы транзакций.

const sortDecreasingAmountByUser = Object.entries(totalByUser)
  .map(([userId, totalAmount]) => ({ userId, totalAmount }))
  .sort((a, b) => b.totalAmount - a.totalAmount);

console.log(sortDecreasingAmountByUser);

// 4. Выведите топ-3 пользователя по общей сумме транзакций в формате:
// [{"userID": "user1", "totalAmount": 1000}, …].

const top3UsersByTotalAmount = sortDecreasingAmountByUser.slice(0, 3)

console.log(top3UsersByTotalAmount);
