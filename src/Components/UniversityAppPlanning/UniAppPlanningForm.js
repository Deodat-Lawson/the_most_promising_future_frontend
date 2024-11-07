import React, {useEffect, useState} from 'react';
import './UniAppPlanningForm.css';
import axios from 'axios';
import {Country, State} from 'country-state-city';
import Navbar from "../Navbar";
import HomeBackground from "../../Assets/HomeBackground.mp4";


function UniAppPlanningForm() {

    const ProgBar = ({currentStep, totalSteps}) => {
        const progressPercentage = (currentStep / totalSteps) * 100;
        return (
            <div className="prog-bar">
                <div className="steps">
                    Step {currentStep} of {totalSteps}
                </div>


                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{width: `${progressPercentage}%`}}
                    >
                    </div>
                </div>


            </div>


        );
    };


    const [step, setStep] = useState(1);
    const countries = Country.getAllCountries();
    const [states, setStates] = useState([]);
    const [formData, setFormData] = useState({
        fullName: '',
        currentGradeLevel: '',
        country: '',
        state: '',
        citizenship: '',
        currentSchoolSystem: '',
        GPA: '',
        SAT: '',
        ACT: '',
        honorAndAwards: '',
        fieldsOfInterest: '',
        geographicalPreference: '',
        sizeOfUniversity: '',
        prestigeFactor: 0,
        requireFinancialAidScale: false,
        EA: true,
        ED: true,
        RD: true,
        numberOfSchools: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
                [e.target.name]: (e.target.name === 'requireFinancialAidScale' || e.target.name === 'EA' || e.target.name === 'ED' || e.target.name === 'RD')
                    ? e.target.value === 'true'
                    : e.target.value
        });
    };

    const handleCountryChange = (e) => {
        const selectedCountryCode = e.target.value;
        const countryStates = State.getStatesOfCountry(selectedCountryCode);

        setFormData({
            ...formData,
            country: selectedCountryCode,
            state: '',
        });

        setStates(countryStates);
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const endpoint = 'http://127.0.0.1:8000/gpt/';

    const submitForm = () => {
        console.log(formData);
        const response = axios.post(endpoint, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert(`Form submitted!`);
        nextStep()
        return response;
    };


    const fetchData = async () => {
        const response = await axios.get(endpoint);
        console.log(response.data);
        const responseData = response.data;
        return responseData;
    }

    // const postData = async () => {
    //     const response = await axios.post(endpoint, formData);
    //     return response.data;
    // }

    useEffect(() => {
        fetchData();
    }, []);


    return (

        <div className="video-background">
            <Navbar/>


            <div className="video-container">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="background-video"
                >
                    <source
                        src={HomeBackground}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                <div className="video-overlay"/>
            </div>

            <div  style={{
                width: "65%", margin: "0 auto", paddingTop: '8rem'
            }}>

                <ProgBar currentStep={step} totalSteps={7}/>
            </div>


            <div className="form-container" >

                <h2>Personal and Academic Background</h2>

                {step === 1 && (
                    <div className="form-step">
                        <h3>Personal Background</h3>

                        <div className="form-group">
                            <label>Full Name:</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Current Grade Level:</label>
                            <input
                                type="text"
                                name="currentGradeLevel"
                                value={formData.currentGradeLevel}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Country of Residence:</label>
                            <select id="country-selection" value={formData.country} onChange={handleCountryChange}
                                    name="country">
                                <option value="">Select a Country</option>
                                {countries.map((country) => (
                                    <option key={country.isoCode} value={country.isoCode}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {formData.country && (
                            <div className="form-group">
                                <label>Choose a State:</label>
                                <select
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a State</option>
                                    {states.map((state) => (
                                        <option key={state.isoCode} value={state.isoCode}>
                                            {state.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="citizenship">Citizenship:</label>
                            <input
                                type="text"
                                id="citizenship"
                                name="citizenship"
                                value={formData.citizenship}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="form-step">
                        <div className="form-group">
                            <label>Current School System:</label>
                            <select id="school-selection" value={formData.currentSchoolSystem} onChange={handleChange}
                                    name="currentSchoolSystem">
                                <option value="">Select a School System</option>
                                <option value="AP">AP System</option>
                                <option value="IB">IB System</option>
                                <option value="Honors">Honors System</option>
                                <option value="A Level">A Levels System</option>
                                <option value="Other">Other System</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Current GPA: (If you are not sure how to calculate your GPA, use the converter <a
                                href="https://gpacalculator.io/gpa-scale/">here</a>)</label>
                            <input
                                type="text"
                                id="GPA"
                                name="GPA"
                                value={formData.GPA}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>SAT Score, if available:</label>
                            <input
                                type="text"
                                id="SAT"
                                name="SAT"
                                value={formData.SAT}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>ACT Score, if available:</label>
                            <input
                                type="text"
                                id="ACT"
                                name="ACT"
                                value={formData.ACT}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="form-step">
                        <div className="form-group">
                            <label>Honor And Awards:</label>
                            <textarea
                                id="honorAndAwards"
                                name="honorAndAwards"
                                value={formData.honorAndAwards}
                                rows="4"
                                cols="50"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="form-step">
                        <div className="form-group">
                            <label>Fields of Interest:</label>
                            <input
                                type="text"
                                id="fieldsOfInterest"
                                name="fieldsOfInterest"
                                value={formData.fieldsOfInterest}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Geographical Preference:</label>
                            <input
                                type="text"
                                id="geographicalPreference"
                                name="geographicalPreference"
                                value={formData.geographicalPreference}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Size of University:</label>
                            <input
                                type="text"
                                id="sizeOfUniversity"
                                name="sizeOfUniversity"
                                value={formData.sizeOfUniversity}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Prestige Factor:</label>
                            <input
                                type="range"
                                id="prestigeFactor"
                                name="prestigeFactor"
                                min="1"
                                max="10"
                                value={formData.prestigeFactor}
                                onChange={handleChange}
                            />
                            <span>{formData.prestigeFactor}</span>
                        </div>
                    </div>
                )}

                {step === 5 && (
                    <div className="form-step">
                        <div className="form-group">
                            <label>Do you require financial aid?</label>
                            <select id="financial-aid" value={formData.requireFinancialAidScale} onChange={handleChange}
                                    name="requireFinancialAidScale">
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                    </div>
                )}

                {step === 6 && (
                    <div className="form-step">
                        <div className="form-group">
                            <label>Early Action:</label>
                            <select id="EA" value={formData.EA} onChange={handleChange}
                                    name="EA">
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Early Decision:</label>
                            <select id="ED" value={formData.ED} onChange={handleChange}
                                    name="ED">
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Regular Decision:</label>
                            <select id="RD" value={formData.RD} onChange={handleChange}
                                    name="RD">
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Number of Schools:</label>
                            <input
                                type="text"
                                id="numberOfSchools"
                                name="numberOfSchools"
                                value={formData.numberOfSchools}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                )}

                {step === 7 && (
                    <div className="form-step">
                        <p>Form Complete!</p>
                        <p>Thank you for filling out the form.</p>
                    </div>
                )}

                <div className="buttons">
                    {(step > 1 && step < 6) && (
                        <button onClick={prevStep} style={{marginRight: '10px'}}>
                            Previous
                        </button>
                    )}
                    {step < 6 ? (
                        <button onClick={nextStep}>
                            Next
                        </button>
                    ) : step === 6 ? (
                        <button onClick={submitForm}>
                            Submit
                        </button>
                    ) : null}
                </div>

                <div className="snowflakes"></div>
            </div>

        </div>
    );
}

export default UniAppPlanningForm;