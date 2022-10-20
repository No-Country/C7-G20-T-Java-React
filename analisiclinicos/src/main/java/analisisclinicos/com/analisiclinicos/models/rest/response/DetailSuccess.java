package analisisclinicos.com.analisiclinicos.models.rest.response;

import analisisclinicos.com.analisiclinicos.common.AppConstants;

public class DetailSuccess {

    private String code;
    private String description;
    private String actor;

    public DetailSuccess(String code, String description, String businessMeaning) {
        this.code = code;
        this.description = description;
        this.actor = AppConstants.APP_ACTOR;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getActor() {
        return actor;
    }

    public void setActor(String actor) {
        this.actor = actor;
    }


}
