import Swal from "sweetalert2";

const handleLogoutClick = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "Do you want to logout",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Log out successfully!",
        text: "You have been logged out.",
        icon: "success",
      });
    }
  });
};

export default handleLogoutClick;
