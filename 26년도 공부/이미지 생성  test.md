구글 클라우드에 저장되어있는 ai 모델을 활용을 하여 이미지를 생성한 test파일 생성
개발 틀은 antigrabity에서 만듦
model_path = "/Users/changyoung/Library/CloudStorage/GoogleDrive-toyoaki900@gmail.com/내 드라이브/shin/sd_xl_base_1.0.safetensors"
구글 드라이브에서 마운트 하여 이미지 생성
```py
import time
import torch
from diffusers import StableDiffusionXLPipeline
from deep_translator import GoogleTranslator

# Google Drive Model Path (Corrected for macOS CloudStorage)
model_path = "/Users/changyoung/Library/CloudStorage/GoogleDrive-toyoaki900@gmail.com/내 드라이브/shin/sd_xl_base_1.0.safetensors"

def translate_prompt(korean_prompt):
    """Translates Korean prompt to English using Google Translator."""
    try:
        print(f"Translating: {korean_prompt}...")
        english_prompt = GoogleTranslator(source='ko', target='en').translate(korean_prompt)
        print(f"Translated to: {english_prompt}")
        return english_prompt
    except Exception as e:
        print(f"Translation error: {e}")
        return korean_prompt  # Return original if translation fails

def main():
    print(f"Loading SDXL base 1.0 from: {model_path}")
    print("This may take some time depending on your Google Drive connection...")
    
    start_time = time.time()
    
    try:
        # Load pipeline from single file
        pipe = StableDiffusionXLPipeline.from_single_file(
            model_path, 
            torch_dtype=torch.float32, 
            use_safetensors=True  
        )
    except Exception as e:
        print(f"Error loading model: {e}")
        return

    load_time = time.time() - start_time
    print(f"Model loaded in {load_time:.2f} seconds.")
    
    # Determine the device (MPS for Apple Silicon, else CPU)
    if torch.backends.mps.is_available():
        device = "mps"
        pipe = pipe.to(device, torch.float16)
        print("MPS (Apple Silicon GPU) detected. Moving model to MPS with float16.")
    else:
        device = "cpu"
        print("MPS not detected. Moving model to CPU (this will be very slow).")
        pipe = pipe.to(device)
    
    # User input for prompt
    korean_input = input("\n이미지 생성을 위한 한글 프롬프트를 입력하세요: ")
    if not korean_input.strip():
        korean_input = "피카츄가 춤을 추고 있다" # Default if empty
        
    prompt = translate_prompt(korean_input)
    
    print(f"\nGenerating image with final prompt: '{prompt}'")
    
    gen_start = time.time()
    # Generate image
    image = pipe(prompt=prompt).images[0]
    gen_time = time.time() - gen_start
    print(f"Image generated in {gen_time:.2f} seconds.")
    
    output_filename = "output.png"
    image.save(output_filename)
    print(f"Done! Image saved as {output_filename}")

if __name__ == "__main__":
    main()
```

```py
torch
torchvision
diffusers
transformers
accelerate
safetensors
omegaconf
```
