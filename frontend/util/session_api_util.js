export const signup = user => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {
      user: {
        email: user.email,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
      },
    },
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {
      user: {
        email: user.email,
        password: user.password,
      },
    },
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
  })
);

export const guestLogin = () => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {
      user: {
        email: 'Guest',
        password: 'password',
      },
    },
  })
);
