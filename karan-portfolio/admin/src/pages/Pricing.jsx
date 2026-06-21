import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const Pricing = () => {

  const [plans, setPlans] = useState([]);

  const [editing, setEditing] =
    useState(false);

  const [editId, setEditId] =
    useState(null);

  const [form, setForm] =
    useState({

      title: "",
      price: "",
      features: "",
      featured: false

    });

  useEffect(() => {

    fetchPlans();

  }, []);

  const fetchPlans = async () => {

    try {

      const res =
        await axios.get(
          "https://webdev-1-jsp7.onrender.com/api/pricing"
        );

      setPlans(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const resetForm = () => {

    setForm({
      title: "",
      price: "",
      features: "",
      featured: false
    });

    setEditing(false);

    setEditId(null);

  };

  const addPlan = async () => {

    try {

      await axios.post(

        "https://webdev-1-jsp7.onrender.com/api/pricing",

        {
          ...form,
          features:
            form.features
              .split(",")
              .map(item => item.trim())
        }

      );

      fetchPlans();

      resetForm();

    } catch (err) {

      console.log(err);

    }

  };

  const handleEdit = (plan) => {

    setEditing(true);

    setEditId(plan._id);

    setForm({

      title: plan.title,

      price: plan.price,

      features:
        plan.features.join(","),

      featured:
        plan.featured || false

    });

  };

  const updatePlan = async () => {

    try {

      await axios.put(

        `https://webdev-1-jsp7.onrender.com/api/pricing/${editId}`,

        {
          ...form,
          features:
            form.features
              .split(",")
              .map(item => item.trim())
        }

      );

      fetchPlans();

      resetForm();

      alert(
        "Plan Updated Successfully"
      );

    } catch (err) {

      console.log(err);

    }

  };

  const deletePlan =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this plan?"
        );

      if (!confirmDelete)
        return;

      try {

        await axios.delete(

          `https://webdev-1-jsp7.onrender.com/api/pricing/${id}`

        );

        fetchPlans();

      } catch (err) {

        console.log(err);

      }

    };

  return (

    <>
      <Sidebar />

      <div className="page">

        <h1>
          Pricing Plans
        </h1>

        <div className="form-card">

          <input
            type="text"
            placeholder="Plan Name"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title:
                  e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price:
                  e.target.value
              })
            }
          />

          <textarea
            placeholder="Feature1, Feature2, Feature3"
            value={form.features}
            onChange={(e) =>
              setForm({
                ...form,
                features:
                  e.target.value
              })
            }
          />

          <label
            style={{
              display: "flex",
              gap: "10px",
              alignItems:
                "center",
              marginBottom:
                "15px"
            }}
          >

            <input
              type="checkbox"
              checked={
                form.featured
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  featured:
                    e.target.checked
                })
              }
            />

            Featured Plan

          </label>

          <div
            className="action-buttons"
          >

            {editing ? (

              <>

                <button
                  className="update-btn"
                  onClick={
                    updatePlan
                  }
                >
                  Update Plan
                </button>

                <button
                  className="cancel-btn"
                  onClick={
                    resetForm
                  }
                >
                  Cancel
                </button>

              </>

            ) : (

              <button
                className="add-btn"
                onClick={
                  addPlan
                }
              >
                Add Plan
              </button>

            )}

          </div>

        </div>

        <div
          className="projects-grid"
        >

          {plans.map((plan) => (

            <div
              key={plan._id}
              className="card"
            >

              <h3>
                {plan.title}
              </h3>

              <h4>
                {plan.price}
              </h4>

              {plan.featured && (
                <p>
                  ⭐ Featured
                </p>
              )}

              <ul>

                {plan.features?.map(
                  (item, i) => (

                    <li key={i}>
                      ✓ {item}
                    </li>

                  )
                )}

              </ul>

              <div
                className="action-buttons"
              >

                <button
                  className="edit-btn"
                  onClick={() =>
                    handleEdit(
                      plan
                    )
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deletePlan(
                      plan._id
                    )
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </>
  );

};

export default Pricing;