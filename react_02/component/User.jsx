const User = ({ user }) => {
  if (user) {
    return (
      <div className="container">
        <Hello name={user.name} />
        <button>Log out</button>
        {user.isAdmin && <button>Trang cá nhân</button>}
      </div>
    );
  }

  return (
    <div className="auth">
      <button>Đăng nhập</button>
      <button>Đăng ký</button>
    </div>
  );
};

// user: {name: string, isAdmin: boolean}

User.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string,
    isAdmin: PropTypes.bool,
  }),
};

// Nếu có User thì hiển thị tên user và nút logout
// Nếu user có isAdmin là true thì hiển thị nút truy cập trang cá nhân
// Nếu không có user thì hiển thị nút đăng nhập và đăng ký

// Ngoài sử dụng cú pháp ? thì có thể sử dụng if else
// if - else sẽ trả về 2 đoạn JSX khác nhau
