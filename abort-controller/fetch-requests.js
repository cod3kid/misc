const controller = new AbortController();

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    });
    const users = await response.json();
    console.log(users);
  } catch (ex) {
    console.log("Exception:", ex.message);
  }
};

fetchUsers();
controller.abort();
