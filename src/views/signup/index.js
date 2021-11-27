import React from 'react';
import { useSelector } from 'react-redux'
import LazyLoad from 'react-lazyload';
import FormUserInfo from '../../components/form-info';
import FormUserInvoice from '../../components/form-invoice';
import FormUserCompleted from '../../components/form-completed';
import './styles.scss';

const Signup = () => {

  const pageStage = useSelector(state => state.FormStage)

  return (

    <main id="request">
      <div className="form-wrapper">
        <h1
          data-testid="Signup-Title"
          className="text-center form"
        >
          Request Form
        </h1>
        <section>
          <LazyLoad once>
            <div className="progressbar">
              <div className={pageStage === 1 ? 'progress-step progress-step-active' : 'progress-step'} data-title="Info"></div>
              <div className={pageStage === 2 ? 'progress-step progress-step-active' : 'progress-step'} data-title="Invoice"></div>
              <div className={pageStage === 3 ? 'progress-step progress-step-active' : 'progress-step'} data-title="Done"></div>
            </div>
          </LazyLoad>

          <div className="page-wrapper">

            {(pageStage === 1) &&
              <LazyLoad once>
                <div className="wrap">
                  <FormUserInfo
                    pageTitle={'User Info:'}
                    submitButtonText={'Next'}
                    previousButton={false}
                  />
                </div>
              </LazyLoad>
            }

            {(pageStage === 2) &&
              <LazyLoad once>
                <div className="wrap">
                  <FormUserInvoice
                    pageTitle={'Invoice:'}
                    submitButtonText={'Next'}
                    previousButton={true}
                  />
                </div>
              </LazyLoad>
            }

            {(pageStage === 3) &&
              <LazyLoad once>
                <div className="wrap">
                  <FormUserCompleted
                    pageTitle={'Success!'}
                    successMessage={'Please verify your email address, you should have recieved an email from us already!'}
                  />
                </div>
              </LazyLoad>
            }
          </div>
        </section>
      </div>
    </main>

  );
};

export default Signup;
