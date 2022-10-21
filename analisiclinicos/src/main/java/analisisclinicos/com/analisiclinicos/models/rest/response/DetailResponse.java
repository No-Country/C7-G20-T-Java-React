package analisisclinicos.com.analisiclinicos.models.rest.response;

import analisisclinicos.com.analisiclinicos.common.AppConstants;

public class DetailResponse<T>{

    private DetailSuccess detailSuccess;

    private T response;

    public DetailResponse(T response, String code) {
        this.setDetailSuccess( new DetailSuccess(code,
                AppConstants.APP_ACTOR,
                AppConstants.DEFAULT_SUCCESS_MESSAGE));

        this.setResponse(response);

    }


    public DetailSuccess getDetailSuccess() {
        return detailSuccess;
    }

    public void setDetailSuccess(DetailSuccess detailSuccess) {
        this.detailSuccess = detailSuccess;
    }

    public T getResponse() {
        return response;
    }

    public void setResponse(T response) {
        this.response = response;
    }
}
