<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePelangganRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules()
    {
            return [
                'pelanggan' => ['required', 'min:3', 'max:200'],
                'alamat' => ['required', 'min:3', 'max:200'],
                'telp' => ['required', 'min:3', 'max:200'],
            ];
    }
}
