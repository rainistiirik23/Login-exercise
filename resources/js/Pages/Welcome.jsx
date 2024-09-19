import { usePage, useForm } from "@inertiajs/react";

export default function Welcome({ statuscode, statusMessage }) {
    const { errors } = usePage().props;
    const { data, setData, post, processing } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function handleLogInSubmit(event) {
        event.preventDefault();
        post("/logIn");
    }

    return (
        <main>
            <div className="log-in-form-container">
                <div className="header-error-message-container">
                    <h1>Log in</h1>
                    {(statuscode == 401 && (
                        <span className="error-message">{statusMessage}</span>
                    )) ||
                        (statuscode == 200 && (
                            <span className="success-message">
                                {statusMessage}
                            </span>
                        ))}
                </div>
                <form
                    onSubmit={(event) => {
                        event.preventDefault;
                        handleLogInSubmit(event);
                    }}
                    className="log-in-form"
                >
                    <div className="log-in-form-label-container">
                        <label className="log-in-form-label" htmlFor="email">
                            Email
                        </label>
                        <div className="log-in-form-input-error-message">
                            {errors.email}
                        </div>
                        <input
                            id="email"
                            className="log-in-form-input"
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>
                    <div className="log-in-form-label-container">
                        <label htmlFor="password">Password</label>
                        {errors.password && (
                            <div className="log-in-form-input-error-message">
                                {errors.password}
                            </div>
                        )}
                        <input
                            id="password"
                            className="log-in-form-input"
                            type="text"
                            name="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                    </div>
                    <button
                        disabled={processing}
                        className="log-in-button"
                        type="submit"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </main>
    );
}
