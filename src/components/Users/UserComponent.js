const UserComponent = (props) => {
    let users_data = props.items.map((el) => (
      <tr>
        <td>{el[0]}</td>
        <td>{el[1]}</td>
      </tr>
    ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {users_data}
        </thead>
      </table>
    </div>
  );
};

export default UserComponent;
