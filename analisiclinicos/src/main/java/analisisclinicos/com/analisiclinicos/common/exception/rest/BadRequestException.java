package analisisclinicos.com.analisiclinicos.common.exception.rest;

public class BadRequestException extends Exception{

    private static final long serialVersionUID = 1L;

    public static final String CODE = "EX-002";

    public BadRequestException(String msg) {
        super(msg);
    }
}
