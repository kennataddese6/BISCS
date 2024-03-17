import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAcademicTypes } from '../../features/academicType/academicSlice';
import './styles/addclearance.css';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';

const AddClearance = () => {
  const dispatch = useDispatch();
  const [clearanceNames, setClearanceNames] = useState();

  const [clearanceItems, setClearanceItems] = useState([
    {
      clearanceItemFor: 'Regular',
      clearanceItem: [
        'Department',
        'Book Store Keeper',
        'Librarian',
        'Food Service',
        'Housing',
        'StoreKeeper',
        'University Police',
        'Registrar Office',
      ],
    },
    {
      clearanceItemFor: 'Extension',
      clearanceItem: [
        'Department',
        'CDE Office',
        'CBE coordinator',
        'Librarian',
        'Book Store keeper',
        'Head,Budget & Finance',
        'University Police',
        'Registerar Office',
      ],
    },
    {
      clearanceItemFor: 'Weekend',
      clearanceItem: ['Dorm', 'Cafe'],
    },
  ]);

  const { isError, isSuccess, message } = useSelector(state => state.academic);
  const handleRemoveAcademic = (value, identifier) => {
    const newclearancName = clearanceNames.map(clearanceName =>
      clearanceName.clearancefor === identifier
        ? {
            ...clearanceName,
            clearance: clearanceName.clearance.filter(a => a !== value),
          }
        : clearanceName,
    );
    setClearanceNames(newclearancName);
  };
  const handleDropDownChange = (clearanceName, target) => {
    if (!clearanceName) {
      return;
    }
    let duplicateValue;
    for (let i = 0; i < clearanceNames.length; i++) {
      duplicateValue =
        clearanceNames[i].clearancefor === target &&
        clearanceNames[i].clearance.find(a => a === clearanceName);
      if (duplicateValue) {
        toast.error(`${duplicateValue} already added!`);
        break;
      }
    }
    if (duplicateValue) {
      return;
    }
    const newClearanceNames = clearanceNames.map(oneClearance =>
      oneClearance.clearancefor === target
        ? {
            ...oneClearance,
            clearance: [...oneClearance.clearance, clearanceName],
          }
        : oneClearance,
    );
    setClearanceNames(newClearanceNames);
  };
  useEffect(() => {
    dispatch(getAcademicTypes());
  }, [dispatch]);
  useEffect(() => {
    if (isSuccess) {
      const initialClearance =
        message &&
        message.map(acadamicNames => {
          const data = {
            clearance: ['Dormitory', 'Cafe'],
            clearancefor: acadamicNames.AcademicName,
          };
          return data;
        });
      setClearanceNames(initialClearance);
    }
  }, [isSuccess, isError, message]);

  return (
    <>
      <div className="addClearanceContainer">
        {message &&
          message.map((AcademicNames, index) => (
            <div key={index} className="clearance col-l-4 ">
              <h3 className="addClearanceHeaderText">
                Add clearance for {AcademicNames.AcademicName}
              </h3>
              <div className="clearancetypesContainer">
                {clearanceNames &&
                  clearanceNames.map(clearanceName => (
                    <>
                      {clearanceName.clearancefor === AcademicNames.AcademicName
                        ? clearanceName.clearance.map((oneClearance, index) => (
                            <div
                              key={index}
                              className="clearanceType col-s-4 col-l-5 col-xl-3"
                            >
                              <div className="academicTypeText">
                                {oneClearance}
                              </div>
                              <div
                                className="closeIconContainer"
                                onClick={() => {
                                  handleRemoveAcademic(
                                    oneClearance,
                                    clearanceName.clearancefor,
                                  );
                                }}
                              >
                                <MdClose />
                              </div>
                            </div>
                          ))
                        : ''}
                    </>
                  ))}
              </div>
              <select
                className="clearancetypesDropDown"
                onChange={e => {
                  handleDropDownChange(
                    e.target.value,
                    AcademicNames.AcademicName,
                  );
                }}
              >
                <option value=""> Choose an Clearance type </option>
                {clearanceItems.map(oneClearanceItem => (
                  <>
                    {oneClearanceItem.clearanceItemFor ===
                    AcademicNames.AcademicName
                      ? oneClearanceItem.clearanceItem.map(clearanceName => (
                          <option> {clearanceName}</option>
                        ))
                      : ''}
                  </>
                ))}
              </select>
              <input
                type="text"
                name="customInput"
                placeholder="Custom clearance type"
                className="customClearanceInput"
              />
              <button className="addCustomClearanceTypeButton">
                Add Custom
              </button>
            </div>
          ))}
      </div>
      <div className="nextButtonContainer">
        <button className="nextStepButton"> Next </button>
      </div>
    </>
  );
};

export default AddClearance;
