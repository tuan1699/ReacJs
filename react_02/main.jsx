// Props là readonly (nếu cố tình thay đổi -gán lại giá trị cho props sẽ báo lỗi)

// Có một số props đặc biệt
// propsTypes => Xác thực kiểu dữ liệu chp próp/ gợi ý props truyền vào => Hạn chế lỗi không mong đợi
// Bất kỳ thư viện nào có props nên có propsType đi kèm
// Có thể dùng TypeScript để xác thực thay cho propsTypes
// defaultProps => Cung cấp giá trị mặc định cho props trong trường hợp props đó không được truyền vào
// Có 2 cách sử dụng defalult props

// function Time() {
//   const now = new Date();

//   return <p> It's {now.toLocaleDateString()}</p>;
// }

function Avatar({ src, alt }) {
  return <img src={src} alt={alt} />;
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  src: "",
  alt: "",
};
