"use client";

import ActionBar from '@/app/components/ActionBar';
import classes from './styles.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import demoData from '@/app/demoData.json';
import BackNavBtn from '@/app/components/BackNavBtn';
import { redirect } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useFormState } from "react-dom";
import { getProjectInfo, updateProjectInfo } from "@/app/_db/srvactions/UserProfile";
import { CiEdit } from "react-icons/ci";

const ProjectInfo = {
  _id: null,
  uid: null,
  name: null,
  description: null,
  short_description: null,
  year: null
}

function FormInputLabel(props) {
  var label = props.label;
  var formItem = props.formItem;

  return (
    <label className={classes.label}>
      {label}
      {formItem}
    </label>
  );
}

function EditProjectForm({ onClose }) {
  const { project, error, isLoading } = useUser();

  const [formState, formAction] = useFormState(updateProjectInfo, ProjectInfo);

  const [projectInfo, setProjectInfo] = useState(ProjectInfo);
  var projectDoc = ProjectInfo;

  useEffect(() => {
    try {
      getProjectInfo(project.sub.substring(6)).then((data) => {
        setProjectInfo(data);
        projectDoc = data;
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, []);

  const handleChange = (e) => {
    setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
  }

  return (
    <div className={classes.overlay}>
      <form className={classes.formCard} id={classes.editInfoFormCard} action={formAction}>
        <div className={classes.formHeader}>
          <span className={classes.formTitle}>Edit Project Info</span>
          <button className={classes.closeBtn} onClick={onClose}>X</button>
        </div>

        <FormInputLabel label="Project Name"
          formItem = { <input className={classes.formInput}
            type="text"
            name="name"
            value={projectInfo?.name || ""}
            onChange={handleChange}
            placeholder="Project Name"/>
          }/>

        <FormInputLabel label="Description"
          formItem = { <input className={classes.formInput}
            type="text"
            name="description"
            value={projectInfo?.description || ""}
            onChange={handleChange}
            placeholder="Description"/>
          } />

        <FormInputLabel label="Short Description"
          formItem = { <input className={classes.formInput}
            type="text"
            name="short_description"
            value={projectInfo?.short_description || ""}
            onChange={handleChange}
            placeholder="Short Description"/>
          } />

        <FormInputLabel label="Year"
          formItem = { <input className={classes.formInput}
            type="text"
            name="year"
            value={projectInfo?.year || ""}
            onChange={handleChange}
            placeholder="Year"/>
          } />

        <div className={classes.btns}>
          <button type="submit" className={classes.submitBtn} id={classes.updateInfoSubmitBtn}>
            Update Project Info
          </button>
          <Link href={{ pathname: "/dashboard/account/" }}>
            <button type="submit" className={classes.submitBtn} id={classes.cancelInfoSubmitBtn}>
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

function Card(props) {
    var title = props.title;
    
    return (
        <div className={classes.cardTitle}>{title}</div>
    )
}

function FormCard({ title, onClose, options }) {
  const [data, setData] = useState(options[0]._id);

  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
  }

  return (
    <div className={classes.overlay}>
      <div className={classes.formCard}>
        <div className={classes.formHeader}>
          <span className={classes.formTitle}>{title}</span>
          <button className={classes.closeBtn} onClick={onClose}>X</button>
        </div>

        <select className={classes.dropdownBtn} onChange={onOptionChangeHandler}>
          {options.map((options, index) => {
            return (
              <option key={index} value={options._id}>
                {options.type} ({options.name})
              </option>
            )
          })}
        </select>

        <Link href={{pathname: "overview/feedRecord", query: {id: data}}} className={classes.submitBtn} id={classes.feedRecordSubmitBtn}>Submit</Link>
      </div>
    </div>
  )
}

export default function Overview() {
    const [showModal, setShowModal] = useState(false);
    const [showEditInfoModal, setShowEditInfoModal] = useState(false);
    const animalData = demoData.animals;

    return (
        <main>
            <ActionBar title="Project Overview" disableBack={false} />

            <div className={classes.header}>
              <span className={classes.title}>Project Overview</span>
              <button className={classes.editInfoContainer} onClick={() => setShowEditInfoModal(true)}>
                <CiEdit />
                <span id={classes.editInfo}>Edit Project Info</span>
              </button>
              {showEditInfoModal && (
                <EditProjectForm onClose={() => setShowEditInfoModal(false)}/>
              )}
            </div>
            
            <div className={classes.cardContainer}>
                <div className={classes.cardGroup}>
                    <Card title = "Animal Inventory and Purchases" />
                    
                    <Link href={{pathname: "overview/supplyInventory"}}>
                        <Card title = "Equipment, Supplies, and Feed Inventory" />
                    </Link>

                    <Card title = "Other Expenses" />

                    <div onClick={() => setShowModal(true)}>
                      <Card title = "Feed Record" />
                    </div>
                    {showModal && (
                      <FormCard title="Select an Animal" onClose={() => setShowModal(false)} options={animalData} />
                    )}
                </div>
            </div>
        </main>
    )
}